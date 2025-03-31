import styled from 'styled-components';
import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import circlesDb from '../../public/circles.json'

const CirclesHeader = styled.h2`
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
`;
const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Img = styled.img`
    width: 100vw;
    height: 7rem;
    object-fit: cover;
    @media (min-width: 890px) {
        width: 50vw;
        height: 9rem;
    }
`;
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ContentCard = styled.div`
    width: 19rem;
    height: 4rem;
    margin-top: 20px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.90);
    vertical-align: center;
    @media (min-width: 890px) {
        width: 27rem;

    }
`;
const ContentHeader = styled.h3`
    color:#69472D;
    margin-left: 1rem;
`;
const ContentSpan = styled.span`
    color: rgba(30, 30, 30, 0.90);
    font-weight: 400;
    font-size: 14px;
`;

interface Circle {
    id: number;
    name: string;
    meetingSchedule: string;
    currentlyReading: string;
    latestComment: string;
    nextMeetup: string;
    image: string;
}

function BookCirclesGroup() {
    const { id } = useParams();
    const circleId = id ? parseInt(id) : undefined;
    const [circle, setCircle] = useState<Circle>({
        id: 0,
        name: '',
        meetingSchedule: '',
        currentlyReading: '',
        latestComment: '',
        nextMeetup: '',
        image: '',
    });

    useEffect(() => {
        if (circleId !== undefined) {
            const selectedCircle = circlesDb.find((circle) => circle.id === circleId);
            if (selectedCircle) {
                setCircle(selectedCircle);
            }
        }
        console.log(circle, 'vald bok');
    }, [circle, circleId]);
    
    
    return (
        <Fragment>
            <CirclesHeader>{circle.name}</CirclesHeader>
            <ImgWrapper>
                <Img src={circle.image} alt="Book circle image" />
            </ImgWrapper>
            <ContentWrapper>
                <ContentCard>
                    <ContentHeader>Currently Reading: <ContentSpan>{circle.currentlyReading}</ContentSpan></ContentHeader>
                </ContentCard>
                <ContentCard>
                    <ContentHeader>Discussion Forum: <ContentSpan>{circle.latestComment}</ContentSpan></ContentHeader>
                </ContentCard>
                <ContentCard>
                    <ContentHeader>Reading Schedule: <ContentSpan>{circle.meetingSchedule}</ContentSpan></ContentHeader>
                </ContentCard>
                <ContentCard>
                    <ContentHeader>Next Meetup: <ContentSpan>{circle.nextMeetup}</ContentSpan></ContentHeader>
                </ContentCard>
            </ContentWrapper>
        </Fragment>
    );
}

export default BookCirclesGroup;
