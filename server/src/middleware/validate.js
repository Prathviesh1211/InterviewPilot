const validate = (schema) => {
  return (req, res, next) => {
    //->Higher order function
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      });
    }
    req.validatedData = result.data;
    next();
  };
};

export default validate;
