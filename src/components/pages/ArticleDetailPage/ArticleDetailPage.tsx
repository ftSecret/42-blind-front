import Comments from 'components/Comments/Comments';
import DetailHeader from 'components/DetailHeader/DetailHeader';
import ArticleDetail from 'components/ArticleDetail/ArticleDetail';

import classes from 'components/pages/ArticleDetailPage/ArticleDetailPage.module.css';

const ArticleDetailPage = () => {
  return (
    <>
      <DetailHeader content="42 블라인드 익명 게시판" />
      <section className={classes.wrap}>
        <ArticleDetail />
        <Comments />
        <div className={classes.inputWrap}>
          <input placeholder="댓글을 입력하세요" className={classes.input} />
        </div>
      </section>
    </>
  );
};

export default ArticleDetailPage;
