import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 340,
    },
});

const Product = ({product}) => {
    const classes = useStyles();
    return (
       <div className="col-md-3 ml-3 mb-4 pb-4 pl-5">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                       image={product.imageUrl}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        ${product.AddPrice}
                    </Button>
                    <Button size="small" color="primary">
                       <Link to ={`/checkout/${product._id}`}>BuyNow</Link> 
                    </Button>
                </CardActions>
            </Card>

            </div>
    );
};

export default Product;