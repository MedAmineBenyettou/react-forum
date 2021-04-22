import { rest } from 'msw';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Forum from '../../components/Forum';
import { renderHook } from '@testing-library/react-hooks';
import { initForum } from '../../contexts/forum/Actions/forum';
import { useForum } from '../../contexts/forum/ForumContext';

test('Initialises the Forum: No api functions', () => {});
