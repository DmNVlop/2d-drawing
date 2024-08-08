const insertRedWorkOnContext = (countertops, work) => {
  currentItem.radius = t.corners[currentItem.cornerPosition.indexOf(1)];
  const finalCurrentObject = modifyRedINObject(currentItem);
  if (Array.isArray(finalCurrentObject) && finalCurrentObject?.length > 0) {
    const indexArrayToDelete = [];
    finalCurrentObject.forEach((workToSave) => {
      indexArrayToDelete.push(getIndexWorkOnPieceIfExistCtx(workToSave));
    });

    if (Array.isArray(indexArrayToDelete) && indexArrayToDelete.length > 0) {
      deleteWorkInPieceByFilterCtx(indexArrayToDelete);
    }

    finalCurrentObject.forEach((workToSave) => {
      updateWorkInPieceCtx(workToSave, getSelectedPieceValueCtx());
    });
  }
};

const deleteRedWorkOnContext = (countertops, work) => {};
