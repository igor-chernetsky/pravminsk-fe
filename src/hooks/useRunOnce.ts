import { useEffect, useRef } from 'react';

/**
 * Custom hook that ensures an effect runs only once, even in React Strict Mode.
 * This prevents double execution of effects during development.
 * 
 * @param effect - The effect function to run
 * @param deps - Dependencies array (optional, defaults to empty array)
 */
export const useRunOnce = (effect: () => void | (() => void), deps: React.DependencyList = []) => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    
    return effect();
  }, deps);
};

/**
 * Custom hook for async effects that run only once.
 * 
 * @param effect - The async effect function to run
 * @param deps - Dependencies array (optional, defaults to empty array)
 */
export const useRunOnceAsync = (effect: () => Promise<void>, deps: React.DependencyList = []) => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    
    effect();
  }, deps);
};

/**
 * Custom hook for effects that need to respond to prop changes but prevent double execution.
 * 
 * @param effect - The async effect function to run
 * @param deps - Dependencies array
 */
export const useRunOnceWithDeps = (effect: () => Promise<void>, deps: React.DependencyList) => {
  const hasRun = useRef(false);
  const prevDeps = useRef(deps);

  useEffect(() => {
    // Check if this is the first run
    if (!hasRun.current) {
      hasRun.current = true;
      effect();
      return;
    }

    // Check if dependencies actually changed
    const depsChanged = deps.some((dep, index) => dep !== prevDeps.current[index]);
    if (depsChanged) {
      prevDeps.current = deps;
      effect();
    }
  }, deps);
}; 