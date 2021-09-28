import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=dfbf3be53c5b4002a87b59600fce1d38')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    articles.map(article => <Grid item xs={2} sm={4} md={4}>
                        <News article={article}></News>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Newspaper;