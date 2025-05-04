exports.formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  exports.calculatePagination = (page, limit) => {
    const skip = (page - 1) * limit;
    return { skip, limit };
  };