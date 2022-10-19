import brianHeadshot from "./../assets/images/headshot-brian.jpg";

function About() {
  return (
    <div className="flex flex-col px-20">
      <div className="max-w-xl self-center">
        <p className="font-librefranklin dark:text-zinc-100">
          RandoMarvel lets you pick and watch a random Marvel-produced movie or
          TV show to watch. Bored on a Saturday night? Have crippling decision
          anxiety? Generate a movie/tv show now.
        </p>
      </div>
      <div className="mt-8 flex max-w-xl self-center dark:text-zinc-100">
        <div className="mr-10">
          <img
            src={brianHeadshot}
            className="h-40 w-40 rounded-full"
            alt="Brian's Headshot"
          />
        </div>
        <div className=" flex-1">
          <p className=" font-librefranklin dark:text-zinc-100">
            Brian wrote this small app. Check out more about him at{" "}
            <a
              href="https://www.brianreyman.com/"
              className=" text-marvel-500 hover:underline dark:text-marvel-100"
              target="_blank"
              rel="noreferrer"
            >
              BrianReyman.com
            </a>
            .
          </p>
          <p className=" mt-8 font-librefranklin">
            View this app's{" "}
            <a
              href="https://github.com/breyman/com-randomarvel"
              className="text-marvel-500 hover:underline dark:text-marvel-100"
              target="_blank"
              rel="noreferrer"
            >
              source code on GitHub
              <i className="fa-brands fa-github pl-1"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
