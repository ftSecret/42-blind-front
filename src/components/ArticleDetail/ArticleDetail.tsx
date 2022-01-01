import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from 'utils/formatDate';
import { getDummies } from 'utils/getDummies';

import userImage from 'assets/images/alien (2).png';

import Status from 'components/Status/Status';
import styled from 'styled-components';
import { flexColumn } from 'assets/styles/mixin';

type ArticleTypes = {
  id: number | null;
  title: string;
  content: string;
  created_at: Date | null;
  views: number;
  likes: number;
  comments: number;
};

const ArticleDetail = () => {
  const [detail, setDetail] = useState<ArticleTypes>({
    id: null,
    title: '',
    content: '',
    created_at: null,
    views: 0,
    likes: 0,
    comments: 0,
  });
  const { articleId } = useParams();

  useEffect(() => {
    //id로 데이터 가져오는 로직
    const datas = getDummies();
    const temp = datas.find((data) => {
      if (`${data.id}` === articleId) return true;
      return false;
    });
    const { id, title, content, created_at, views, likes, comments } = temp as ArticleTypes;
    setDetail({ id, title, content, created_at, views, likes, comments });
  }, [articleId]);

  return (
    <StyledDetail>
      <StyledProfile>
        <StyledUserImage>
          <img alt="user" width="50" height="50" src={userImage} />
        </StyledUserImage>
        <StyledProfileInfo>
          <h2>익명</h2>
          <h3>{formatDate(detail.created_at!)}</h3>
        </StyledProfileInfo>
      </StyledProfile>
      <h1>{detail.title}</h1>
      <h1>{detail.content}</h1>
      <Status comments={detail.comments} views={detail.views} likes={detail.likes} />
    </StyledDetail>
  );
};

export default ArticleDetail;

const StyledDetail = styled.div`
  ${flexColumn}
  gap: 0.5em;
  border-bottom: 1px solid var(--grey-color);
  margin-bottom: 0.5rem;
`;

const StyledProfile = styled.div`
  ${flexColumn}
  gap: 1em;
`;

const StyledProfileInfo = styled.div`
  text-align: left;

  & > h2 {
    font-weight: bold;
  }

  & > h3 {
    color: var(--grey-color);
  }
`;

const StyledUserImage = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;
