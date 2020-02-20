import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
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
  const { spec } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {spec.title}
        </Typography>
        <Typography variant="body2" component="p">
          {spec.description}
        </Typography>
      </CardContent>
      {spec && spec.links.map(links => (
        <CardActions>
          <Button size="small">{links.title}</Button>
        </CardActions>
      ))}
    </Card>
  );
}
