import React, { useEffect, useMemo, useState } from 'react';
import Button from 'components/atoms/Button';
import NotificationsIcon from 'components/atoms/icons/NotificationsIcon';
import NotificationsOutlineIcon from 'components/atoms/icons/NotificationsOutlineIcon';
import { PATH_POST } from 'components/utils/AppRouter';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { centerRowStyle, flexRow } from 'styles/mixin';
import { size } from 'styles/theme';
import { formatDate } from 'utils/formatDate';
import { NotificationType, NOTIFICATION_COMMENT_TYPE, NOTIFICATION_POST_TYPE } from 'api/type';
import {
  useCheckBlindNotificationMutation,
  useGetBlindNotificationCountQuery,
  useLazyGetBlindNotificationQuery,
} from 'api/blindNotification';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import ErrorOutlineIcon from 'components/atoms/icons/ErrorOutlineIcon';
import { StyledErrorArticle } from 'components/molecules/ErrorMessage/ErrorMessage';

type NotificationListItemPropType = {
  isChecked: boolean;
};

const getMessage = (type: NotificationType) => {
  if (type === NOTIFICATION_COMMENT_TYPE) return '댓글에 답글이 달렸습니다. ';
  else if (type === NOTIFICATION_POST_TYPE) return '게시글에 댓글이 달렸습니다. ';
  else throw new Error(`${type}은 유효하지 않은 타입입니다.`);
};

const formatNumber = (number: number) => (number > 9 ? '9+' : number.toString());
const DEFAULT_SIZE = 100;

const Notifications = () => {
  const [notificationIsHidden, setNotificationIsHidden] = useState(true);
  const { data: countData, refetch: refetchCount } = useGetBlindNotificationCountQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [getNotificationData, notificationData] = useLazyGetBlindNotificationQuery();
  const [checkNotification] = useCheckBlindNotificationMutation();
  const notifications = useMemo(() => notificationData?.data?.data ?? [], [notificationData?.data]);
  const count = useMemo(() => countData?.data.number ?? 0, [countData?.data.number]);

  const handleClick = () => {
    setNotificationIsHidden(!notificationIsHidden);
  };

  const hiddenNotification = () => {
    setNotificationIsHidden(true);
  };

  const clickCheckNotification = (notification_id: number) => {
    if (notifications.find((elem) => elem.notification_id === notification_id)?.deleted_at === null)
      checkNotification({ notification_id });
  };

  const clickCheckAllNotification = async () => {
    await notifications.forEach(async (elem) => {
      if (elem.deleted_at === null)
        await checkNotification({ notification_id: elem.notification_id });
    });
    getNotificationData({ page: 0, size: DEFAULT_SIZE });
    refetchCount();
  };

  useEffect(() => {
    if (notificationIsHidden === false) getNotificationData({ page: 0, size: DEFAULT_SIZE });
  }, [notificationIsHidden, getNotificationData]);

  return (
    <>
      <StyledNotificationButton onClick={handleClick}>
        {notificationIsHidden ? (
          <StyledNotificationOutlineIcon size={25} />
        ) : (
          <StyledNotificationIcon size={25} />
        )}
        <StyledNumber hidden={count <= 0} aria-hidden={count <= 0}>
          {formatNumber(count)}
        </StyledNumber>
      </StyledNotificationButton>
      <NotificationList hidden={notificationIsHidden} aria-hidden={notificationIsHidden}>
        {notificationData.isLoading && <LoadingSpinner />}
        {notificationData.isSuccess && notifications.length === 0 && (
          <ErrorArticle>알림이 없습니다.</ErrorArticle>
        )}
        {notifications.length > 0 && (
          <>
            <NotificationOption>
              <strong>알림</strong>
              <button onClick={clickCheckAllNotification}>모두 읽음</button>
            </NotificationOption>
            {notifications.map((item) => {
              return (
                <NotificationListItem isChecked={item.deleted_at !== null}>
                  <Link
                    onClick={() => {
                      clickCheckNotification(item.notification_id);
                    }}
                    key={item.notification_id}
                    to={`${PATH_POST}/${item.post_id}`}
                  >
                    <NotificationContent>
                      <p>{getMessage(item.type)}:</p>&nbsp;
                      <strong>"{item.comment_content}"</strong>&nbsp;
                      <time>{formatDate(item.created_at.toString())}</time>
                    </NotificationContent>
                  </Link>
                </NotificationListItem>
              );
            })}
          </>
        )}

        {notificationData.isError && (
          <ErrorArticle>
            <ErrorOutlineIcon size={40} />
            알림을 가져오는데 에러가 발생했습니다.
          </ErrorArticle>
        )}
      </NotificationList>
      <NotificationOverlay
        onClick={hiddenNotification}
        hidden={notificationIsHidden}
        aria-hidden={notificationIsHidden}
      />
    </>
  );
};

const ErrorArticle = styled(StyledErrorArticle)`
  height: 100%;
  padding: 2rem;
`;

const NotificationOverlay = styled.div`
  z-index: 2;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

const StyledNotificationIcon = styled(NotificationsIcon)`
  height: ${size.icon};
  width: ${size.icon};
`;

const StyledNotificationOutlineIcon = styled(NotificationsOutlineIcon)`
  height: ${size.icon};
  width: ${size.icon};
`;

const StyledNotificationButton = styled(Button)`
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

const NotificationList = styled.ul`
  width: clamp(calc(${size.mobile} - 2rem), 90vw, calc(${size.tablet} - 2rem));
  min-height: 100px;
  max-height: 35vh;
  overflow-y: auto;
  position: absolute;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 0.3rem;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  top: calc(${size.header});
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
`;

const NotificationListItem = styled.li<NotificationListItemPropType>`
  padding: 1rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};

  & p,
  strong,
  time {
    opacity: ${({ isChecked }) => (isChecked ? 0.3 : '')};
  }

  &:not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;

const NotificationOption = styled.div`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  padding: 0.3rem 0.5rem 0rem 0.5rem;

  strong {
    font-size: 1.1rem;
  }

  button {
    all: unset;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.9rem;
  }

  button:active {
    opacity: 0.7;
  }
`;

const NotificationContent = styled.div`
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
