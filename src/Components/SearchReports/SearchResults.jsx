import React, { useState } from 'react';
import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout';

import {
  Avatar,
  AvatarSize,
  Button,
  ButtonDesign,
  Card,
  FCLLayout,
  FlexBox,
  FlexBoxDirection,
  FlexibleColumnLayout,
  Label,
  List,
  RatingIndicator,
  StandardListItem,
  Text,
  Title,
  Toolbar,
  ToolbarDesign,
  ToolbarSpacer
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/employee';
// import {sapUiContentPadding} from "@ui5/webcomponents-react-base/styling/spacing";

const SearchResults = () => {
  const primaryData = [
    {
      movie: 'F0FD0E393A304D13A284',
      genre: 'Damien2 Descgov2',
      country: 'confierm'
    },
    {
      movie: 'CC49E41AFCD447878B19',
      genre: 'Armin E2E1',
      country: 'AF Zest 2 ER in 1 d - 1'
    },
    {
      movie: 'A0635ACC680F4C8981F5',
      genre: 'Armin E2E1',
      country: 'Germany'
    }
  ];
  const detailData = [
    {
      name: 'Policy',
      gender: 'Germany BRKG Expense Policy'
    },
    {
      name: 'Report Purpose:',
      gender: ''
    },
    {
      name: 'Report Creation Date:',
      gender: '01.08.2019'
    },
    {
      name: 'Report Currency:',
      gender: 'EUR'
    },
    {
      name: 'Approval status:',
      gender: 'Approved'
    },
    {
      name: 'Destination Country:',
      gender: 'GERMANY'
    }
  ];
  const [layout, setLayout] = useState(FCLLayout.OneColumn);
  const [selectedMovie, setSelectedMovie] = useState(primaryData[0]);
  const [selectedCast, setSelectedCast] = useState(detailData[0]);

  const onStartColumnClick = (e) => {
    setSelectedMovie(primaryData.find((item) => item.movie === e.detail.item.dataset.movie));
    setLayout(FCLLayout.TwoColumnsMidExpanded);
  };

  const onMiddleColumnClick = (e) => {
    setSelectedCast(detailData.find((item) => item.name === e.detail.item.dataset.name));
    setLayout(FCLLayout.ThreeColumnsEndExpanded);
  };

  return (
    <FlexibleColumnLayout
      style={{ height: '600px' }}
      layout={layout}
      startColumn={
        <>
          <List headerText="Results" onItemClick={onStartColumnClick}>
            {primaryData.map((item) => (
              <StandardListItem description={item.genre} data-movie={item.movie}>
                {item.movie}
              </StandardListItem>
            ))}
          </List>
        </>
      }
      midColumn={
        <>
          <Toolbar design={ToolbarDesign.Solid}>
            <Title>{selectedMovie.movie}</Title>
            <ToolbarSpacer />
            <Button
              icon="decline"
              design={ButtonDesign.Transparent}
              onClick={() => {
                setLayout(FCLLayout.OneColumn);
              }}
            />
          </Toolbar>
          <Toolbar
            style={{
              height: '200px'
            }}
          >
            <Avatar
              icon="employee"
              size={AvatarSize.XL}
              style={{
                marginLeft: '12px'
              }}
            />
            <FlexBox
              direction={FlexBoxDirection.Column}
              style={{
                marginLeft: '6px'
              }}
            >
              <FlexBox>
                <Label>Report ID:</Label>
                <Text
                  style={{
                    marginLeft: '2px'
                  }}
                >
                  {selectedMovie.movie}
                </Text>
              </FlexBox>
              <FlexBox>
                <Label>Employee Name:</Label>
                <Text
                  style={{
                    marginLeft: '2px'
                  }}
                >
                  {selectedMovie.genre}
                </Text>
              </FlexBox>
              <FlexBox>
                <Label>Country:</Label>
                <Text
                  style={{
                    marginLeft: '2px'
                  }}
                >
                  {selectedMovie.country}
                </Text>
              </FlexBox>
            </FlexBox>
          </Toolbar>
          <List headerText="Details" onItemClick={onMiddleColumnClick}>
            {detailData.map((item) => (
              <StandardListItem description={item.gender} data-name={item.name}>
                {item.name}
              </StandardListItem>
            ))}
          </List>
        </>
      }
      endColumn={
        <>
          <Toolbar design={ToolbarDesign.Solid}>
            <Title>{selectedCast.name}</Title>
            <ToolbarSpacer />
            <Button
              icon="decline"
              design={ButtonDesign.Transparent}
              onClick={() => {
                setLayout(FCLLayout.TwoColumnsMidExpanded);
              }}
            />
          </Toolbar>
          <Card
            avatar={<Avatar icon="person-placeholder" />}
            titleText={selectedCast.name}
            subtitleText={`age: ${Math.floor(Math.random() * (75 - 18 + 1) + 18)}`}
            status={selectedCast.gender}
          >
            {/*<div style={sapUiContentPadding}>*/}
            <div>
              <Text>Place holder.</Text>
            </div>
          </Card>
        </>
      }
    />
  );
};

export default SearchResults;
