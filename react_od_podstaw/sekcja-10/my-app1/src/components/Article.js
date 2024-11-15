import { ArticleContainer, Content, Date, Title } from "./Article.styles";

const Article = ({ article }) => {
  return (
    <ArticleContainer>
      <Title variant="h5">{article.title}</Title>
      <Date variant="subtitle1" align="right">
        {article.date}
      </Date>
      <Content variant="body1" align="justify">
        {article.content}
      </Content>
    </ArticleContainer>
  );
};

export default Article;
