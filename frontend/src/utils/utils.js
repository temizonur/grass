import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function compareNames(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export const daySortToInt = (daySort) => {
  if (daySort === 'today') {
    return 1;
  } else if (daySort === 'lastWeek') {
    return 7;
  } else if (daySort === 'lastMonth') {
    return 30;
  } else {
    return null;
  }
};

export const getIdByDayHour = (index, course) => {
  const TOTAL_HOURS = 14;
  const day = course.days[index];
  const hour = course.hours[index];
  const id = TOTAL_HOURS * day + (hour - 1);
  return id;
};

export const useInfinite = (target, addInfFunc, filterFunc) => {
  const count = useSelector((state) => state[`${target}`].count);
  const start = useSelector((state) => state[`${target}`].start);
  const hasMore = useSelector((state) => state[`${target}`].hasMore);
  const sorting = useSelector((state) => state[`${target}`].filter);
  const targets = useSelector((state) => state[`${target}`][`${target}`]);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [currentTarget, setCurrentTarget] = useState([]);
  const [ready, setReady] = useState(false);
  const [noResult, setNoResult] = useState(true);
  const first = useRef(false);
  const fetching = useRef(false);
  useEffect(() => {
    dispatch(addInfFunc(0, count, filter, first, fetching, sorting));
  }, [filter]);

  useEffect(() => {
    if(targets.length > 0){
    setCurrentTarget(filterFunc(targets, filter, sorting));
    }
  }, [targets, sorting]);

  const loadFunc = () => {
    if (!fetching.current) {
      dispatch(addInfFunc(start, count, filter, first, fetching, sorting));
    }
  };

  useEffect(() => {
    if (first.current && currentTarget.length === 0) {
      setNoResult(true);
    } else if (currentTarget.length !== 0 && first.current) {
      setNoResult(false);
    }
    if (!first.current) {
      setReady(false);
    } else {
      setReady(true);
    }
  }, [currentTarget, first]);

  return { loadFunc, currentTarget, hasMore, ready, noResult };
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
