import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Tab, Menu, Icon, Segment } from 'semantic-ui-react';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { Label } from '../Nav/NavTheme';
import Contribution from './Contribution/Contribution';
import About from './About/About';
import Terms from './Terms/Terms';

const StaticPages = () => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(null);

  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname.includes('statics') ||
      location.pathname.includes('about')
    ) {
      setActiveIndex(0);
    } else if (location.pathname.includes('contribution')) {
      setActiveIndex(1);
    } else if (location.pathname.includes('terms')) {
      setActiveIndex(2);
    }
  }, [location]);

  const getColor = (i) => {
    return activeIndex === i ? 'green' : 'blue';
  };

  const handleIndex = (e, data) => {
    setActiveIndex(data.activeIndex);
    if (data.activeIndex === 0) {
      history.push('/about');
    } else if (data.activeIndex === 1) {
      history.push('/contribution');
    } else if (data.activeIndex === 2) {
      history.push('/terms');
    }
  };

  const panes = [
    {
      menuItem: {
        content: (
          <Label bold pointer color={getColor(0)}>
            Hakkında
          </Label>
        ),
        color: 'green',
        key: 1,
      },
      render: () => (
        <Segment style={{ marginRight: '0.5em' }}>
          <About />
        </Segment>
      ),
    },
    {
      menuItem: {
        content: (
          <Label bold pointer color={getColor(1)}>
            Katkı Sağlamak
          </Label>
        ),
        color: 'green',
        key: 2,
      },
      render: () => (
        <Segment style={{ marginRight: '0.5em' }}>
          <Contribution />
        </Segment>
      ),
    },
    {
      menuItem: {
        content: (
          <Label bold pointer color={getColor(2)}>
            Kurallar
          </Label>
        ),
        color: 'green',
        key: 3,
      },
      render: () => (
        <Segment style={{ marginRight: '0.5em' }}>
          <Terms />
        </Segment>
      ),
    },
  ];

  return (
    <div style={{ height: '90vh' }}>
      <Tab
        menu={{ fluid: true, vertical: true, tabular: true, pointing: true }}
        panes={panes}
        onTabChange={(event, data) => handleIndex(event, data)}
        activeIndex={activeIndex}
        style={{ paddingTop: '1em' }}
      />
    </div>
  );
};

export default StaticPages;