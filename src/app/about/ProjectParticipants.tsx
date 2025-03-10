const aboutDetails = [
  {
    header: "Medical Research Council",
    message:
      "It is a publicly funded government agency responsible for coordinating and funding medical research in the United Kingdom. Council funded the START project by Global Challenge Research Fund Foundation Award",
  },
  {
    header: "University of Reading",
    message:
      "The University (located in Berkshire, England) was established in 1892 as a public university. The START project runs under the supervision of the School of Psychology and Clinical Language Science and Professor <b>Bhismadev Chakrabarti</b>.",
  },
  {
    header: "Public Health Foundation of India",
    message:
      "PHFI is helping to build institutional and system capacity in India for strengthening education, training, research and policy development in the area of Public Health.<br>Project collaborator: <b>Ph.D Vikram Patel</b>",
  },
  {
    header: "Birkbeck University of London",
    message:
      "Birkbeck College is a public research university located in Bloomsbury, London, England, and was established in 1823.<br>Project collaborators: <b>Mark Johnson</b> and <b>Teodora Gliga</b>",
  },
  {
    header: "Nottingham Trent University",
    message:
      "The university was formed by the amalgamation of many separate institutions of higher education. It originated from the Nottingham Government School of Design founded in 1843.<br>Project collaborators: <b>Matthew Belmonte</b>",
  },
  {
    header: "All India Institutes of Medical Sciences",
    message:
      "The All India Institutes of Medical Sciences (AIIMS) is a group of autonomous public medical colleges of higher education. AIIMS New Delhi, the fore-runner parent excellence institution, was established in 1956.<br>Project collaborators: <b>Sheffali Gulati</b>",
  },
  {
    header: "Sangath",
    message:
      "Sangath is a non-governmental, not-for-profit organisation committed to improving health across the life span by empowering existing community resources to provide appropriate physical, psychological and social therapies.<br>Project collaborators: <b>Gauri Divan</b>",
  },
  {
    header: "Indian Institute of Technology Bombay",
    message:
      "The IIT Bombay is a public engineering institution located in Powai, Mumbai, India. It is the second-oldest (after Indian Institute of Technology Kharagpur) institute of the Indian Institutes of Technology system.<br>Project collaborators: <b>Sharat Chandran</b>",
  },
  {
    header: "Therapy Box",
    message:
      "Therapy Box is a multi award winning software development company, specializing in healthcare and education innovation. We have received numerous international awards for innovation and we bring this expertise in working with universities on complex and special development projects<br>Project participants: <b>Swapnil Gadgil, Rebecca Bright, Nadir Ibrahimov</b>",
  },
];

const ProjectParticipants = () => {
  return (
    <div className="w-full h-full py-14 lg:py-24 mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h1 className="flex gap-2 mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            <span className="inline-block">Our</span>
            <span className=" text-primary">Project</span>
            <span className="inline-block">Participants</span>
          </h1>
          <p className="text-lg text-gray-500 text-center pt-4">
            We have collaborated with esteemed...
          </p>
        </div>

        <div className="swiper teamswiper pb-10">
          <div className="w-full justify-center flex flex-wrap ">
            {aboutDetails?.map((item: any) => {
              return (
                <>
                  <div className="bg-gray-100 mx-2 my-4 rounded shadow-md">
                    <div className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500 p-4  lg:flex-nowrap ">
                      <div className="text-center lg:text-left lg:max-w-xs flex-1">
                        <div className="mb-5 pb-5 border-b border-solid border-red-300">
                          <h6 className="text-lg text-gray-900 font-semibold mb-1">
                            {item.header}
                          </h6>
                        </div>

                        <p
                          className="text-gray-500 leading-6 mb-7"
                          dangerouslySetInnerHTML={{ __html: item.message }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectParticipants;
