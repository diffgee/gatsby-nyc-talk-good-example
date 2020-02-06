# onload func

() => {
        const width = window && window.innerWidth;

        switch(true) {
          case width < 768:
            setAlt('bjork singing');
            setText(bjorkText);
            break;
          
          case width < 1200:
            setAlt('skogafoss waterfall');
            setText(skogafossText);
            break;
          
          default:
            setAlt('reynisfjara black sand beach');
            setText(reynisfjaraText);
        }
      }