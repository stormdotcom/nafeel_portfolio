import React from 'react';
import { Chrono } from 'react-chrono';

interface TimelineEvent {
    title: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetailedText?: string;
}

interface TimelineComponentProps {
    events: TimelineEvent[];
}

const Timeline: React.FC<TimelineComponentProps> = ({ events }) => {
    return (
        <div className="w-full h-full">
            <Chrono
                items={events}
                mode="VERTICAL"
                theme={{
                    primary: "#6366F1",
                    secondary: "#fffF",
                    cardBgColor: "white",
                    cardForeColor: "black",
                    titleColor: "#374151"
                }}
                fontSizes={{
                    cardSubtitle: '0.85rem',
                    cardText: '0.8rem',
                    cardTitle: '1rem',
                    title: '0.5rem',
                }}
                classNames={{
                    card: 'my-card',
                    cardMedia: 'my-card-media',
                    cardSubTitle: 'my-card-subtitle',
                    cardText: 'my-card-text',
                    cardTitle: 'my-card-title',
                    controls: 'hidden',
                    title: 'text-lg',
                }}
                disableNavOnKey
                hideControls
                cardHeight={100}
            />
        </div>
    );
};

export default Timeline;
