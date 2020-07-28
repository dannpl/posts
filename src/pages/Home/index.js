import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GridFill, ViewList } from 'react-bootstrap-icons';

import Pagination from './../../components/Pagination';
import ModalPost from './../../components/Post/ModalPost';
import CardPost from './../../components/Post/CardPost';
import { Container, Card, CardsList } from './styles';

import Repository from './../../services/repository';
import * as PostsActions from './../../store/modules/posts/actions';

export default function Home() {
  const api = new Repository();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [mode, setMode] = useState('gallery');
  const [currentPost, setCurrentPost] = useState({});
  const [modalEdit, setModalEdit] = useState(false);
  const [loading, setLoaing] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 1000,
  });

  const dummyData = () => {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({ id: i });
    }

    dispatch(PostsActions.setPosts(data));
  };

  const getPosts = async ({ page, limit }) => {
    dummyData();
    setLoaing(true);
    const response = await api.getPosts(page, limit);

    if (!response.data) return;

    setLoaing(false);
    dispatch(PostsActions.setPosts(response.data));
  };

  const changeMode = () => setMode(mode === 'list' ? 'gallery' : 'list');

  const handlePagination = async (newPagination) => {
    await setPagination(newPagination);

    getPosts(newPagination);
  };

  useEffect(() => {
    getPosts(pagination);
  }, []);

  const openModal = async (id) => {
    setCurrentPost({});
    const post = posts.find((item) => item.id === id);

    setModalEdit(true);

    const responseComments = await api.getCommentsById(post.id);
    const responseUser = await api.getUserById(post.userId);

    if (responseComments) post.comments = responseComments.data;
    if (responseUser) post.user = responseUser.data;

    post.loaded = true;
    setCurrentPost(post);
  };

  return (
    <>
      <Container>
        <div className="container-mode">
          <ViewList
            className="icon-mode"
            size={25}
            style={{ marginRight: 5 }}
            color={mode === 'list' ? '#64acfb' : ''}
            onClick={() => changeMode()}
          />
          <GridFill
            className="icon-mode"
            size={25}
            color={mode === 'gallery' ? '#64acfb' : ''}
            onClick={() => changeMode()}
          />
        </div>

        <CardsList mode={mode}>
          {posts.map((post) => (
            <Card mode={mode} key={post.id}>
              <CardPost
                openModal={(value, id, status) => openModal(value, id, status)}
                loading={loading}
                mode={mode}
                {...post}
              />
            </Card>
          ))}
        </CardsList>
        <div className="container-pagination">
          <Pagination
            pagination={pagination}
            changePagination={(newPagination) =>
              handlePagination(newPagination)
            }
          />
        </div>
      </Container>
      <ModalPost
        show={modalEdit}
        post={currentPost}
        close={() => setModalEdit(false)}
      />
    </>
  );
}
