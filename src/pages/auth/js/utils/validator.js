const validateAll = (values = {}, patterns = []) => {
  const errorMessages = [];

  patterns.forEach((pattern) => {
    const value = values[pattern.id]?.trim() || "";

    if (pattern.required && value.length === 0) {
      errorMessages.push(pattern.message.required);
      return;
    }

    if (value && !pattern.pattern.test(value)) {
      errorMessages.push(pattern.message.pattern);
    }
  });

  return errorMessages;
};

export default validateAll;
