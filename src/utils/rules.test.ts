import test from 'node:test';
import assert from 'node:assert/strict';
import { formatCustomerCount, getTechnologyModeState, calculateScrollProgress } from './rules.ts';

test('formatCustomerCount formats thousands with k+ suffix', () => {
  assert.equal(formatCustomerCount(18420), '18k+');
  assert.equal(formatCustomerCount(18000), '18k+');
  assert.equal(formatCustomerCount(500), '500+');
});

test('getTechnologyModeState returns correct theme properties', () => {
  const creative = getTechnologyModeState(false);
  assert.equal(creative.themeAccent, '#ff3811');
  assert.equal(creative.showGridLines, false);

  const tech = getTechnologyModeState(true);
  assert.equal(tech.themeAccent, '#00e5ff');
  assert.equal(tech.showGridLines, true);
});

test('calculateScrollProgress calculates clamped percentage', () => {
  assert.equal(calculateScrollProgress(0, 1000), 0);
  assert.equal(calculateScrollProgress(500, 1000), 50);
  assert.equal(calculateScrollProgress(1200, 1000), 100);
});
