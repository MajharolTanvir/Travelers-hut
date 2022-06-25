import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const Home = () => {
    var items = [
        {
            key: '1',
            url: "https://ttg.com.bd/uploads/tours/hotels/278_003jpg.jpg",
        },
        {
            key: '2',
            url: "https://i.ytimg.com/vi/YxpAQcq5-y0/maxresdefault.jpg",
        },
        {
            key: '3',
            url: "https://porzoton.com/wp-content/uploads/2020/03/sixty-dome-mosque_featured-1024x576.jpg",
        }
    ]
    return (
        <div className='container mx-auto text-slate-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
                <div>
                    <h3 className='text-3xl'>Hello world</h3>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, temporibus earum? Est illo dolore itaque deserunt velit ullam laborum sequi.</p>
                </div>
                <Carousel next={() => {/* Do stuff */ }}
                    prev={() => {/* Do other stuff */ }}>
                    {
                        items.map(item =>
                            <Paper key={item.key}>
                                <img src={item.url} alt="" />
                            </Paper>
                        )
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Home;