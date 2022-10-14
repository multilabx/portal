export const useHeader = () => {
  const dscList = ["next generation", "A Engineering Team", "Software House"];

  const description = ref(dscList[0]);
  const tmp = ref(0);
  const polling = ref();

  onMounted(() => {
    polling.value = setInterval(() => {
      if (tmp.value > dscList.length - 1) tmp.value = 0;
      description.value = dscList[tmp.value];
      tmp.value++;
    }, 3000);
  });

  onUnmounted(() => {
    clearInterval(polling.value);
  });
  return { description };
};
