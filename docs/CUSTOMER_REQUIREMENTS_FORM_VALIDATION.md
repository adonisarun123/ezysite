# Customer Requirements Form - Validation Rules

## Implemented Validations

### 1. Basic Details
- ✅ **Customer Name**: Required, minimum 2 characters.
- ✅ **Mobile Number**: Required, exactly 10 digits, must start with 6-9 (Indian mobile numbers).
- ✅ **House/Door Number**: Required, non-empty.
- ✅ **Apartment/Society Name**: Required, non-empty.
- ✅ **Area/Locality**: Required, non-empty.

### 2. Service Requirements
- ✅ **Service Type**: Required, selection from 'maid', 'cook', 'babysitter', 'elderly_care', or 'other'.
- ✅ **Service Type (Other)**: Required only if 'other' is selected.
- ✅ **Work Type**: Required, selection from 'live_in', 'full_time', or 'part_time'.
- ✅ **Timings**: Defaults provided, validation ensures non-empty selection.

### 3. Policy Acknowledgments (Step 7)
- ✅ **Salary by 7th**: Must be explicitly checked.
- ✅ **No Advance Salary**: Must be explicitly checked.
- ✅ **Feedback Commitment**: Must be explicitly checked.
- ✅ **Information Accuracy**: Must be explicitly checked.
- ✅ **Terms of Service**: Must be explicitly checked.
- ✅ **Contact Consent**: Must be explicitly checked.

## Validation Behavior

### Real-time Feedback
- Error messages appear immediately below the field upon trying to proceed if requirements aren't met.
- Input fields highlight in red for clarity.
- Mobile number auto-formats and restricts to numeric input only.

### Multi-step Control
- Users cannot advance to the next step unless all required fields for the current step are valid.
- The 'SUBMIT' button on the final step is only enabled/functional when all policy acknowledgments are checked.

## Submission Layer
- Verified data is sent to `/api/customer-requirements`.
- Error handling ensures users are notified if the network request fails.
- Success state displays a clear confirmation message with the user's name.
