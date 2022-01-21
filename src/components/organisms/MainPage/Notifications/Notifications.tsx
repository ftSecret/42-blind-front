import React, { useState } from 'react';
import Button from 'components/atoms/Button';
import NotificationsIcon from 'components/atoms/icons/NotificationsIcon';
import NotificationsOutlineIcon from 'components/atoms/icons/NotificationsOutlineIcon';
import { PATH_POST } from 'components/utils/AppRouter';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { centerRowStyle } from 'styles/mixin';
import { size } from 'styles/theme';
import { formatDate } from 'utils/formatDate';
import dayjs from 'dayjs';

type NotyListItemPropType = {
  isChecked: boolean;
};

const data = {
  data: [
    {
      notification_id: 0,
      type: 'comment' as const,

      redirect_id: 2,
      created_at: new Date(),

      parent_id: 1,
      parent_value: '진짜 진짜 배고프지 않아요?',

      children_id: 2,
      children_value: '아 진짜 진짜 진짜 진짜요?',

      is_checked: false,
    },
    {
      notification_id: 1,
      type: 'comment' as const,

      redirect_id: 2,
      created_at: dayjs().subtract(15, 'hour'),

      parent_id: 1,
      parent_value: '클러스터 오아시스에 커피자판기나 카누 블랙 상시 있으면 좋을것 같아요!',

      children_id: 2,
      children_value: '당떨어져..',

      is_checked: false,
    },
    {
      notification_id: 2,
      type: 'comment' as const,

      redirect_id: 2,
      created_at: dayjs().subtract(1, 'day'),

      parent_id: 1,
      parent_value: '진짜 진짜 배고프지 않아요?',

      children_id: 2,
      children_value: '아 진짜 진짜 진짜 진짜요?',

      is_checked: true,
    },
    {
      notification_id: 3,
      type: 'reply' as const,

      redirect_id: 2,
      created_at: dayjs().subtract(2, 'day'),

      parent_id: 1,
      parent_value: '댓글 달아주세요',

      children_id: 2,
      children_value: '2',

      is_checked: false,
    },
  ],
};

type NotyType = 'reply' | 'comment' | 'good_comment' | 'good_post';

const getMessage = (type: NotyType) => {
  if (type === 'reply') return '댓글에 답글이 달렸습니다. ';
  else if (type === 'comment') return '게시글에 댓글이 달렸습니다. ';
  else if (type === 'good_comment') return '댓글에 좋아요가 눌렸습니다.';
  else if (type === 'good_post') return '게시글에 좋아요가 눌렸습니다.';
  else throw new Error(`${type}은 유효하지 않은 타입입니다.`);
};

const Notifications = () => {
  const [notyIsHidden, setNotyIsHidden] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [number, setNumber] = useState(
    data.data.filter((elem) => elem.is_checked === false).length,
  );

  const handleClick = () => {
    setNotyIsHidden(!notyIsHidden);
  };

  return (
    <>
      <StyledNotyButton onClick={handleClick}>
        {notyIsHidden ? <StyledNotyOutlineIcon size={25} /> : <StyledNotyIcon size={25} />}
        <StyledNumber hidden={number <= 0} aria-hidden={number <= 0}>
          {number}
        </StyledNumber>
      </StyledNotyButton>
      <NotyList hidden={notyIsHidden} aria-hidden={notyIsHidden}>
        {data?.data.map((item) => {
          return (
            <NotiListItem isChecked={item.is_checked}>
              <Link key={item.notification_id} to={`${PATH_POST}/${item.redirect_id}`}>
                <StyledContent>
                  <strong>"{item.parent_value}"</strong>&nbsp;
                  <p>{getMessage(item.type)}:</p>&nbsp;
                  <strong>"{item.children_value}"</strong>&nbsp;
                  <p>{formatDate(item.created_at.toString())}</p>
                </StyledContent>
              </Link>
            </NotiListItem>
          );
        })}
      </NotyList>
    </>
  );
};

const StyledNotyIcon = styled(NotificationsIcon)`
  height: ${size.icon};
  width: ${size.icon};
`;

const StyledNotyOutlineIcon = styled(NotificationsOutlineIcon)`
  height: ${size.icon};
  width: ${size.icon};
`;

const StyledNotyButton = styled(Button)`
  all: unset;
  ${centerRowStyle}
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
`;

const StyledNumber = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.xxs};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.red};
  padding: 0.15rem;
  border-radius: 50%;
  font-weight: bold;
  min-width: 15px;
  min-height: 15px;
  z-index: 1;
  top: 0px;
  right: 0px;
  transform: translate(30%);
`;

const NotyList = styled.ul`
  width: 90vw;
  min-height: 100px;
  max-width: ${size.tablet};
  max-height: 40vh;
  overflow-y: auto;
  position: absolute;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 0.3rem;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  top: calc(${size.header} + 1rem);
  left: 50%;
  transform: translate(-50%);
`;

const NotiListItem = styled.li<NotyListItemPropType>`
  padding: 1rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};

  & p,
  strong {
    opacity: ${({ isChecked }) => (isChecked ? 0.3 : '')};
  }

  &:not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;

const StyledContent = styled.div`
  line-height: 1.2;
  word-break: break-all;
  word-wrap: break-word;
  text-align: left;

  & strong {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  & p {
    display: inline-block;
  }

  & p:nth-last-child(1) {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export default Notifications;
