const viewDetail = (link, index) => ({
  type: 'VIEW_ACTION',
  payload: {
    link,
    index
  }
});

export default viewDetail;