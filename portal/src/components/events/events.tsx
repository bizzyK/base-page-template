// components/events.tsx
'use client';
import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import CustomIndicator from '@/components/announcements/customindicator';
import { EventsData } from "@/types";

interface EventsProps {
  data: EventsData;
}

// Function to remove HTML tags from a string
const stripHtmlTags = (text: string) => {
  return (text || '').replace(/<[^>]*>/g, '');
};

const Events: React.FC<EventsProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const cardsPerPage = 4; // Adjust this number based on your layout and preference

  const handleChange = (_: any, value: number) => {
    setPage(value);
  };

  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.events.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ color: '#e9542f', fontWeight: 'bold', fontSize: '28px', textAlign: 'left', marginBottom: '20px' }}>
        Base Events
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {currentCards.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 250, backgroundColor: '#333', color: '#fff', borderRadius: '10px' }}>
            <CardActionArea href={'#'} target="_blank" rel="noopener noreferrer">
              <CardMedia component="img" height="140" image={card.image} alt={card.title} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: '#fff', fontSize: '18px' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#999' }}>
                  {stripHtmlTags(card.description)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <CustomIndicator
        length={Math.ceil(data.events.length / cardsPerPage)}
        activeIndex={page}
        onClick={(index) => handleChange(undefined, index)}
      />
    </Box>
  );
};

export default Events;
