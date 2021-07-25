export const actions = {
  addComment: (data) => {
    return {
      type: "COMMENT",
      payload: {
        type: data.type,
        index: data.index,
        text: data.text
      },
    };
  },
};
