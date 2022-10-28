import React from 'react'
import {Card, CardMedia, CardContent, Typography} from "@mui/material"
import {useParams, Link} from "react-router-dom"

function Product() {
    const params = useParams()
    const products = [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
      },
      {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355",
      },
      {
        albumId: 1,
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776",
      },
      {
        albumId: 1,
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97",
      },
    ];
    const Singleproduct = products.filter(item => item.id.toString() === params.id)
  return (
    <div>
      {Singleproduct.map((product) => (
        <Card key={product.id} >
          <CardMedia
            image={product.thumbnailUrl}
            component="img"
            alt={product.title}
            height="150"
          />
          <CardContent>
            <Typography component="div" variant="body1">
              {product.title}
            </Typography>
            <li>
              <Link className="product-link">{product.url}</Link>
            </li>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Product