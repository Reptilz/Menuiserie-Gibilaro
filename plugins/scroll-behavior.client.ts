export default defineNuxtPlugin(async function () {
  // if (typeof window !== "undefined") {

  //   const router = useRouter();

  //   // Function to remove hash from URL
  //   const removeHashFromUrl = () => {
  //     const { pathname, search } = window.location;
  //     window.history.replaceState({}, document.title, pathname + search);
  //   };

  //   // Scroll event listener to remove hash when scrolling
  //   window.addEventListener("scroll", removeHashFromUrl);

  //   router.beforeEach((to) => {
  //     if (to.hash) {
  //       const targetElement = document.querySelector(to.hash);
  //       if (targetElement) {
  //         targetElement.scrollIntoView({
  //             behavior: "smooth"
  //         });
  //         const p:Promise<boolean> = new Promise((resolve)=>{
  //           setTimeout(()=>{
  //             resolve(true);
  //           },1000);
  //         });
  //         return p;
  //       }
  //     }

  //     // If no hash in URL, scroll to top
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //     // Also remove hash from URL
  //     removeHashFromUrl();
  //   });
  // }
});
