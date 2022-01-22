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
import '@ui5/webcomponents-icons/dist/chain-link';
// import {sapUiContentPadding} from "@ui5/webcomponents-react-base/styling/spacing";

const SearchResults = () => {
  const primaryData = [
    {
      movie: 'F0FD0E393A304D13A284',
      genre: 'grok-service-1',
      country: 'asdtybfg-1'
    },
    {
      movie: 'CC49E41AFCD447878B19',
      genre: 'grok-service-1',
      country: 'asdtybfg-1'
    },
    {
      movie: 'A0635ACC680F4C8981F5',
      genre: 'grok-service-2',
      country: 'asdtybfg-1'
    },
    {
      movie: 'F0FD0E393A304D13A284',
      genre: 'grok-service-1',
      country: 'asdtybfg-1'
    },
    {
      movie: 'ZC49E41AFCD447878B19',
      genre: 'grok-service-1',
      country: 'asdtybfg-1'
    },
    {
      movie: 'M0635ACC680F4C8981F5',
      genre: 'grok-service-2',
      country: 'asdtybfg-1'
    },
    {
      movie: 'R0FD0E393A304D13A284',
      genre: 'grok-service-1',
      country: 'asdtybfg-1'
    },
    {
      movie: 'AC49E41AFCD447878B19',
      genre: 'grok-service-4',
      country: 'asdtybfg-1'
    },
    {
      movie: 'X0635ACC680F4C8981F5',
      genre: 'grok-service-3',
      country: 'asdtybfg-1'
    },
    {
      movie: 'V0FD0E393A304D13A284',
      genre: 'grok-service-1',
      country: 'asdtybfg-1'
    },
    {
      movie: 'TC49E41AFCD447878B19',
      genre: 'grok-service-1',
      country: 'asdtybfg-1'
    },
    {
      movie: 'M0635ACC680F4C8981F5',
      genre: 'grok-service-5',
      country: 'asdtybfg-1'
    }
  ];
  const detailData = [
    {
      name: 'Details',
      gender: 'This is the detailed log report'
    },
    {
      name: 'Time:',
      gender: '01.08.2020'
    },
    {
      name: 'Level:',
      gender: 'INFO'
    },
    {
      name: 'Region:',
      gender: 'EU-2'
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
              icon="chain-link"
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
                <Label>Correlation ID:</Label>
                <Text
                  style={{
                    marginLeft: '2px'
                  }}
                >
                  {selectedMovie.movie}
                </Text>
              </FlexBox>
              <FlexBox>
                <Label>Service Name:</Label>
                <Text
                  style={{
                    marginLeft: '2px'
                  }}
                >
                  {selectedMovie.genre}
                </Text>
              </FlexBox>
              <FlexBox>
                <Label>Cluster Name:</Label>
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
