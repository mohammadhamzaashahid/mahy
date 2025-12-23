import { articles } from "@/constants/articles";

const getArticle = (id, translation) => {
    const article = articles.find((article) => article.id === Number(id));
    return {
        ...article,
        heading: (translation(`Article${id}Heading`)),
        subHeading: (translation(`Article${id}SubHeading`)),
        article: (translation(`Article${id}`)),
    }
};

const getArticles = (start, end, translation) => {
    return articles.slice(start, end).map((article) => ({
        ...article,
        heading: translation(`Article${article.id}Heading`),
        subHeading: translation(`Article${article.id}SubHeading`),
    }));
};

export { getArticle, getArticles };