import { useEffect, useState } from 'react';
import { filterDeep } from 'deepdash-es/standalone';

import Nested from './Nested';
import Search from './Search';
import type { Choice, NestedChoiceProps } from './types';

const NestedChoice = ({ choices, placeholder }: NestedChoiceProps) => {
  const [choice, setChoice] = useState<Choice>();
  const [search, onSearch] = useState<string>('');
  const [filteredChoices, setFilteredChoices] = useState(choices);

  useEffect(() => {
    if (search !== '') {
      setFilteredChoices(
        filterDeep(choices, (value, key) => {
          return !(
            key === 'label' &&
            typeof value === 'string' &&
            !value.toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    } else {
      setFilteredChoices(choices);
    }
  }, [choices, search]);

  return (
    <Nested
      placement="bottom-start"
      className="focus:ring-2 focus:ring-blue-300 focus:outline-none drop-shadow rounded-lg"
      header={<Search onSearch={onSearch} search={search} />}
      label={choice ? choice.label : placeholder}
      active={!!choice}
      choices={filteredChoices}
      onItemClick={setChoice}
    />
  );
};

export default NestedChoice;
