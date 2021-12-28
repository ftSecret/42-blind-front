import ArticleDetail from '../../ArticleDetail/ArticleDetail';
import Comments from '../../Comments/Comments';
import DetailHeader from '../../DetailHeader/DetailHeader';
import classes from './ArticleDetailPage.module.css';
const ArticleDetailPage = () => {
  return (
    <>
      <DetailHeader />
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
