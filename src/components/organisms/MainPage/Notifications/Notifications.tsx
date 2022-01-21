import Button from 'components/atoms/Button';
import NotificationsIcon from 'components/atoms/icons/NotificationsIcon';
import NotificationsOutlineIcon from 'components/atoms/icons/NotificationsOutlineIcon';
import { PATH_POST } from 'components/utils/AppRouter';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { centerRowStyle } from 'styles/mixin';
import { size } from 'styles/theme';
import { formatDate } from 'utils/formatDate';

const data = {
  data: [
    {
      notification_id: 0,
      type: 'comment', // 알림의 타입, good은 미정이나 추후에 추가될 가능성이 높아보임.

      redirect_id: 2, // 이동시킬 id, 현재 상황에서는 post_id가 들어갈 것으로 예상.
      created_at: new Date(), // 알림의 생성 시간

      parent_id: 1, // type이 comment일 경우 comment_id를 넣음. (추후에 포커싱을 할 수 있으므로)
      parent_value: '진짜 진짜 배고프지 않아요?', // type이 comment일 경우 comment_content를 넣음.

      children_id: 2,
      children_value: '아 진짜 진짜 진짜 진짜요?',

      is_checked: false, // 이 알림이 체크되었는지 안되었는지, 이것은 선택 사항입니다.
    },
    {
      notification_id: 1,
      type: 'comment', // 알림의 타입, good은 미정이나 추후에 추가될 가능성이 높아보임.

      redirect_id: 2, // 이동시킬 id, 현재 상황에서는 post_id가 들어갈 것으로 예상.
      created_at: new Date(), // 알림의 생성 시간

      parent_id: 1, // type이 comment일 경우 comment_id를 넣음. (추후에 포커싱을 할 수 있으므로)
      parent_value: '진짜 진짜 배고프지 않아요?', // type이 comment일 경우 comment_content를 넣음.

      children_id: 2,
      children_value: '아 진짜 진짜 진짜 진짜요?',

      is_checked: false, // 이 알림이 체크되었는지 안되었는지, 이것은 선택 사항입니다.
    },
    {
      notification_id: 2,
      type: 'comment', // 알림의 타입, good은 미정이나 추후에 추가될 가능성이 높아보임.

      redirect_id: 2, // 이동시킬 id, 현재 상황에서는 post_id가 들어갈 것으로 예상.
      created_at: new Date(), // 알림의 생성 시간

      parent_id: 1, // type이 comment일 경우 comment_id를 넣음. (추후에 포커싱을 할 수 있으므로)
      parent_value: '진짜 진짜 배고프지 않아요?', // type이 comment일 경우 comment_content를 넣음.

      children_id: 2,
      children_value: '아 진짜 진짜 진짜 진짜요?',

      is_checked: true, // 이 알림이 체크되었는지 안되었는지, 이것은 선택 사항입니다.
    },
    {
      notification_id: 3,
      type: 'reply', // 알림의 타입, good은 미정이나 추후에 추가될 가능성이 높아보임.

      redirect_id: 2, // 이동시킬 id, 현재 상황에서는 post_id가 들어갈 것으로 예상.
      created_at: new Date(), // 알림의 생성 시간

      parent_id: 1, // type이 comment일 경우 comment_id를 넣음. (추후에 포커싱을 할 수 있으므로)
      parent_value: '진짜 진짜 배고프지 않아요?', // type이 comment일 경우 comment_content를 넣음.

      children_id: 2,
      children_value: '아 진짜 진짜 진짜 진짜요?',

      is_checked: false, // 이 알림이 체크되었는지 안되었는지, 이것은 선택 사항입니다.
    },
  ],
};

const Notifications = () => {
  const [notificationIsHidden, setNotificationIsHidden] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [number, setNumber] = useState(
    data.data.filter((elem) => elem.is_checked === false).length,
  );

  const modalRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setNotificationIsHidden(!notificationIsHidden);
  };

  return (
    <>
      <StyledNotificationsButton onClick={handleClick}>
        {notificationIsHidden ? (
          <NotificationsOutlineIcon size={25} />
        ) : (
          <StyledNotificationsIcon size={25} />
        )}
        <>{number > 0 && <StyledNumber>{number}</StyledNumber>}</>
      </StyledNotificationsButton>
      <StyledNotificationsModal ref={modalRef} hidden={notificationIsHidden}>
        {data?.data.map((item) => {
          return (
            <Link key={item.notification_id} to={`${PATH_POST}/${item.redirect_id}`}>
              <StyledNotiItem>
                <strong>"{item.parent_value}"</strong>&nbsp;
                {item.type === 'reply'
                  ? '댓글에 답글이 달렸습니다. '
                  : '게시글에 댓글이 달렸습니다. '}
                <strong>"{item.children_value}"&nbsp;</strong>
                <p>{formatDate(item.created_at.toString())}</p>
              </StyledNotiItem>
            </Link>
          );
        })}
      </StyledNotificationsModal>
    </>
  );
};

const StyledNotificationsIcon = styled(NotificationsIcon)`
  height: ${size.icon};
  width: ${size.icon};
`;

const StyledNotificationsButton = styled(Button)`
  all: unset;
  ${centerRowStyle}
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
`;

const StyledNumber = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.xxs};
  position: absolute;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.red};
  padding: 0.15rem;
  border-radius: 50%;
  font-weight: bold;
  min-width: 15px;
  min-height: 15px;
  top: 0px;
  right: 0px;
  transform: translate(30%);
`;

const StyledNotificationsModal = styled.div`
  width: 90vw;
  min-height: 100px;
  max-width: ${size.tablet};
  max-height: 35vh;
  overflow-y: auto;
  text-align: justify;
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

const StyledNotiItem = styled.div`
  overflow: auto;
  padding: 0.5rem;
  line-height: 1.2;

  & strong {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  & p {
    display: inline-block;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export default Notifications;
