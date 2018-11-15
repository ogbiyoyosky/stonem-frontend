import React from 'react';
import styled from 'styled-components';
import {
    Box,
    Flex,
    Text,
} from 'rebass';
import FilterButton from './FilterButton';

export interface FilterCriteriaInterface {
  isSelected: boolean;
  name: string;
}

const FilterCriteriaBar = ({ filterCriteria }:any) => (
    <Flex mr={3}>
    {filterCriteria.map((filter:FilterCriteriaInterface, key:number) => (
      <Box
        mr={2}
        key={key}
      >
        <FilterButton isSelected={filter.isSelected}>
          <Text fontSize={0}>{filter.name}</Text>
        </FilterButton>
      </Box>
    ))}
    </Flex>
  );

export default FilterCriteriaBar;
