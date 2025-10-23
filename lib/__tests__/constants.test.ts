import { describe, it, expect } from 'vitest';
import { VALIDATION, REGEX } from '../constants';

describe('constants', () => {
  describe('VALIDATION', () => {
    it('should have age constraints', () => {
      expect(VALIDATION.MIN_AGE).toBe(18);
      expect(VALIDATION.MAX_AGE).toBe(60);
    });

    it('should have file size limits', () => {
      expect(VALIDATION.MAX_PHOTO_SIZE).toBe(800 * 1024);
      expect(VALIDATION.MAX_DOC_SIZE).toBe(5 * 1024 * 1024);
    });

    it('should have phone length constraints', () => {
      expect(VALIDATION.MIN_PHONE_LENGTH).toBe(10);
      expect(VALIDATION.MAX_PHONE_LENGTH).toBe(15);
    });
  });

  describe('REGEX', () => {
    it('should validate email format', () => {
      expect(REGEX.EMAIL.test('test@example.com')).toBe(true);
      expect(REGEX.EMAIL.test('invalid')).toBe(false);
    });

    it('should validate phone format', () => {
      expect(REGEX.PHONE.test('9999888777')).toBe(true);
      expect(REGEX.PHONE.test('123')).toBe(false);
    });

    it('should validate Aadhaar format', () => {
      expect(REGEX.AADHAAR.test('123456789012')).toBe(true);
      expect(REGEX.AADHAAR.test('12345')).toBe(false);
    });

    it('should validate IFSC format', () => {
      expect(REGEX.IFSC.test('SBIN0001234')).toBe(true);
      expect(REGEX.IFSC.test('INVALID')).toBe(false);
    });
  });
});
