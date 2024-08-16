function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
    // return arr.filter((value, index, self) => console.log(value));
  }

  const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
  const p = removeDuplicates(array);

  console.log(p);