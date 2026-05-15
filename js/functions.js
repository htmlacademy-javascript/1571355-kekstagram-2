const isMeetingValid = (workStart, workEnd, meetingStart, meetingDuration) => {
  const getMinutes = (time) => {
    const [hours, minutes] = time.split(':');
    return Number(hours) * 60 + Number(minutes);
  };

  return (
    getMinutes(meetingStart) >= getMinutes(workStart) &&
    getMinutes(meetingStart) + meetingDuration <= getMinutes(workEnd)
  );
};
export {isMeetingValid};
