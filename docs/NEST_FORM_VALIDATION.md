# NEST Booking Form - Comprehensive Validation Rules

## Implemented Validations

### Name Field
- ✅ **Required**: Must not be empty
- ✅ **Minimum Length**: At least 3 characters
- ✅ **Maximum Length**: 100 characters max
- ✅ **Character Validation**: Only letters, spaces, and common punctuation (. ' -)
- ✅ **Format**: Must be properly formatted name

### Phone Number
- ✅ **Required**: Must not be empty
- ✅ **Format**: Exactly 10 digits
- ✅ **Starting Digit**: Must start with 5-9 (Indian mobile numbers)
- ✅ **Display**: Shows with +91 prefix for clarity

### Email Address
- ✅ **Optional**: Not required but validated if provided
- ✅ **Format**: Must be valid email format (user@domain.com)

### Check-in Date
- ✅ **Past Date Prevention**: Cannot select dates in the past
- ✅ **Future Limit**: Cannot book more than 90 days in advance
- ✅ **Required if Check-out is provided**: Both dates must be complete

### Check-out Date
- ✅ **After Check-in**: Must be after the check-in date
- ✅ **Duration Validation**: 
  - Minimum stay: 1 day
  - Maximum stay: 30 days (as per NEST policy)
- ✅ **Required if Check-in is provided**: Both dates must be complete
- ✅ **Auto-min**: Automatically sets minimum to check-in date

### Booking Type
- ✅ **Required**: Defaults to "Helper"
- ✅ **Options**: Helper or Employer

### Stay Type
- ✅ **Optional**: Can be left unselected
- ✅ **Options**: 
  - Helper between jobs
  - Helper new to city
  - Helper during employer vacation
  - Employer booking for helper
  - Emergency stay
  - Festival/holiday stay
  - Medical/personal leave

### Message/Special Requirements
- ✅ **Optional**: No validation, free text

## Validation Behavior

### Real-time Validation
- Errors clear as user corrects the field
- Visual feedback with red borders and background for invalid fields
- Error messages appear below each field

### Submit Validation
- All validations run before submission
- Form won't submit if any validation fails
- User sees all errors at once for better UX

### Visual Indicators
- ❌ Red border and light red background for errors
- ✅ Error message text in red below the field
- 🔄 Smooth transitions between states

## Error Messages
All error messages are user-friendly and actionable:
- Clear indication of what's wrong
- Specific guidance on how to fix it
- No technical jargon
