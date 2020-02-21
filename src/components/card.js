import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    transition: 'box-shadow .3s',
    '&:hover': {
      boxShadow: '0 0 11px rgba(33,33,33,.2)'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DocumentCard(props) {
  const classes = useStyles();
  const { spec, match } = props;

  return (
    <Card className={classes.root}>
      {match && <h2>{match.params.api}</h2>}
      {spec &&
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {spec.title}
          </Typography>
          <Typography variant="body2" component="p">
            {spec.description}
          </Typography>
        </CardContent>}
      {spec && spec.links.map(links => (
        <CardActions>
          <Button size="small"><Link to={links.link}>{links.title}</Link></Button>
        </CardActions>
      ))}
    </Card>

  );
}
