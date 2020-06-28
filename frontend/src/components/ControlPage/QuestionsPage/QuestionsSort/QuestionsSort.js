import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from '../../../Nav/NavTheme';
import { changeSort } from '../../../../reducers/questionReducer';
import Filter from '../../../Filter/Filter';
import QuestionModal from './../Questions/QuestionModal';

const QuestionsSort = () => {
  const filter = useSelector((state) => state.questions.filter);
  const dispatch = useDispatch();
  const [active, setActive] = useState(filter);
  useEffect(() => {
    dispatch(changeSort(active));
  }, [active]);

  return (
    <Menu
      style={{ marginBottom: '0',  }}
      pointing
      secondary
      color="green"
    >
      <Menu.Item
        active={active === 'mostRecent'}
        onClick={() => setActive('mostRecent')}
        header
      >
        <Icon name="fire" color={active === 'mostRecent' ? 'green' : 'blue'} />
        <Label color={active === 'mostRecent' ? 'green' : 'blue'} pointer>
          En Yeni
        </Label>
      </Menu.Item>
      <Menu.Item
        active={active === 'mostPast'}
        onClick={() => setActive('mostPast')}
        header
      >
        <Icon name="time" color={active === 'mostPast' ? 'green' : 'blue'} />
        <Label color={active === 'mostPast' ? 'green' : 'blue'} pointer>
          En Eski
        </Label>
      </Menu.Item>
      <Menu.Item
        active={active === 'mostPopular'}
        onClick={() => setActive('mostPopular')}
        header
      >
        <Icon
          name="comments"
          color={active === 'mostPopular' ? 'green' : 'blue'}
        />
        <Label color={active === 'mostPopular' ? 'green' : 'blue'} pointer>
          En Tartışmalı
        </Label>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item header>
          <QuestionModal />
        </Menu.Item>
        <Menu.Item header>
          <Filter target="Soru" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default QuestionsSort;
