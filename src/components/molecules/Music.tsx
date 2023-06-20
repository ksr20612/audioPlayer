import Genre from 'components/atoms/Genre';
import Mood from 'components/atoms/Mood';
import Title from 'components/atoms/Title';
import Date from 'components/atoms/Date';
import { ReactElement, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { EventFunc } from 'types/Event';
import PlayButton from 'components/atoms/PlayButton';
import { formatDate } from 'utils/formatDate';

interface MusicProps {
    id: string;
    title: string;
    moods: string[];
    genre: string;
    publicDate: string;
    handleClick: EventFunc;
    isPlaying: boolean;
    style?: CSSProperties;
};

const Music = ({
    id,
    title,
    moods,
    genre,
    publicDate,
    handleClick,
    isPlaying,
    style = {},
}: MusicProps): ReactElement => {

    return (
        <Wrapper id={id} style={style}>
            <PlayButton 
                isPlaying={isPlaying} 
                handleClick={handleClick} 
            />
            <Contents>
                <Moods>
                    {
                        moods.map((mood) => {
                            return <Mood key={mood}>{ mood }</Mood>
                        })
                    }
                </Moods>
                <Info>
                    <Title styles={{ flex: 1 }}>{title}</Title>
                    <Genre>{ genre }</Genre>
                    <Date>{ formatDate(publicDate) }</Date>
                </Info>
            </Contents>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    width: 100%;
    min-height: 100px;
    display: flex;
    gap: 20px;
    padding: 20px;
    align-items: center;
`
const Contents = styled.div`
    flex: 1;
`
const Moods = styled.div`
    border-bottom : 1px solid ${({theme}) => theme.color.main_text};
    padding-bottom: 5px;
    flex: 1;
    gap: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 10px;
`

export default Music;