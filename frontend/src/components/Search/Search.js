import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInfAll } from '../../reducers/allReducer';
import { addInfQuestions } from '../../reducers/questionReducer';
import { addInfClubs } from '../../reducers/clubReducer';
import { addInfTeacher } from '../../reducers/teacherReducer';

import SubLesson from '../ControlPage/LessonsPage/Lessons/SubLesson';
import SubTeacher from '../ControlPage/TeachersPage/Teachers/SubTeacher';
import SubQuestion from '../ControlPage/QuestionsPage/Questions/SubQuestion';
import { SubClub } from '../ControlPage/ClubsPage/Clubs/SubClub';
import { Search as S } from 'semantic-ui-react';

const Search = ({ size }) => {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.all.all);
  const questions = useSelector((state) => state.questions.questions);
  const clubs = useSelector((state) => state.clubs.clubs);
  const teachers = useSelector((state) => state.teachers.teachers);
  const [isLoading, setIsLoading] = useState(false);
  const [storedTimeout, setStoredTimeout] = useState(null);
  const [value, setValue] = useState('');
  const refValue = useRef('');
  const first = useRef(false);
  const fetching = useRef(false);
  const [mix, setMix] = useState([]);
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    dispatch(addInfAll(0, 3, value, first, fetching));
    dispatch(addInfQuestions(0, 3, value, first, fetching));
    dispatch(addInfClubs(0, 3, value, first, fetching));
    dispatch(addInfTeacher(0, 3, value, first, fetching));
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, [value]);

  useEffect(() => {
    setMix([
      ...teachers.map((t) => ({ ...t, searchType: 'teacher' })),
      ...clubs.map((c) => ({ ...c, searchType: 'club' })),
      ...questions.map((q) => ({
        ...q,
        searchType: 'question',
        questionId: q.id,
      })),
      ...all.map((l) => ({ ...l, searchType: 'lesson' })),
    ]);
  }, [all, questions, clubs, teachers]);

  useEffect(() => {
    setCurrent(
      mix.filter((m) => {
        if (m.searchType === 'teacher') {
          return m.name
            .toLocaleUpperCase('tr-TR')
            .includes(value.toLocaleUpperCase('tr-TR'));
        } else if (m.searchType === 'club') {
          return m.fullName.toUpperCase().includes(value.toUpperCase()) ||
            m.name.toUpperCase().includes(value.toUpperCase())
            ? true
            : false;
        } else if (m.searchType === 'lesson') {
          return m.name.toUpperCase().includes(value.toUpperCase());
        } else if (m.searchType === 'question') {
          return m.question.toUpperCase().includes(value.toUpperCase());
        }
      })
    );
  }, [mix]);

  const resRender = (m) => {
    if (m.searchType === 'teacher') {
      return <SubTeacher teacher={m} key={m.id} />;
    } else if (m.searchType === 'lesson') {
      return <SubLesson lesson={m} key={m.id} />;
    } else if (m.searchType === 'club') {
      return <SubClub club={m} key={m.id} />;
    } else if (m.searchType === 'question') {
      return <SubQuestion question={m} key={m.id} />;
    }
  };

  const handleOnSearchChange = (e) => {
    refValue.current = e.target.value;
    if (storedTimeout) clearTimeout(storedTimeout);
    setStoredTimeout(
      setTimeout(() => {
        setIsLoading(true);
        setValue(refValue.current);
      }, 300)
    );
  };

  return (
    <S
      loading={isLoading}
      minCharacters={1}
      onSearchChange={(e) => handleOnSearchChange(e)}
      value={refValue.current}
      results={current}
      placeholder="Burayı kullanmak yerine manzaraya tıkla (Evet burası daha bitmedi)"
      size={size ? size : 'massive'}
      noResultsMessage="Aradığınız kritere uygun bir şey bulunamadı."
      resultRenderer={resRender}
    ></S>
  );
};

export default Search;
