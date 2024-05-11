import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
  { title: 'News by Countries', info: 'India, Australia, France, China, United States, Germany, Japan, Saudi Arabia', text: 'Give me the latest news from India' },
  { title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Stock Market, Donald Trump...', text: "What's up with PlayStation 5" },
  { title: 'News by Sources', info: 'CNN, The Hindu, BBC News, The Times of India, National Geographic, Associated Press, Google News, Buzzfeed, TechCrunch, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index} className={classes.infoCards}>
              <div className={classes.card}>
                <Typography variant="h5" className={classes.title}>{infoCard.title}</Typography>
                <Typography variant="h6" className={classes.info}><strong>{infoCard.title.split(' ')[2]}:</strong><br />{infoCard.info}</Typography>
                <Typography variant="h6" className={classes.trySaying}>Try saying:<br /><i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard article={article} activeArticle={activeArticle} index={index} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
