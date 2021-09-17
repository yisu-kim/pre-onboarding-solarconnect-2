import styled from 'styled-components';
import banner from '../../assets/beach.jpeg';

export const Contents = styled.div`
  border-radius: 5px;
  padding: 30px;
  background-color: #deded5;
  background: url(${banner});
  background-size: cover;
  background-position: bottom;
  color: #fff;
`;

export const DateContent = styled.span`
  display: flex;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const TimeContent = styled.span`
  font-size: 80px;
`;
