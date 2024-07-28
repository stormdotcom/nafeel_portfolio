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

                    cardBgColor: "white",
                    cardForeColor: "#0000",
                    titleColor: "#374151"
                }}
                fontSizes={{
                    cardSubtitle: '0.85rem',
                    cardText: '0.8rem',
                    cardTitle: '1rem',
                    title: '0.5rem',
                }}
                classNames={{


                    cardSubTitle: 'dark:text-gray-700 text-white',
                    cardText: 'my-card-text',
                    cardTitle: 'dark:text-gray-700 text-white',
                    controls: 'hidden',
                    title: 'text-lg text-gray-700 dark:text-white',
                }}
                disableNavOnKey
                hideControls
                disableInteraction
                enableDarkToggle
                enableLayoutSwitch={false}
                enableQuickJump={false}
                cardHeight={100}
                disableToolbar={true}
            />
        </div>
    );
};

export default Timeline;
