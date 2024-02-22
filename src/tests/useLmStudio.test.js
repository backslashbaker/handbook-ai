import {renderHook, act} from "@testing-library/react";
import useLmStudio from '../hooks/useLmStudio';

it('should exist', () => {
   const result = useLmStudio();
   expect(result).toBeDefined();
});