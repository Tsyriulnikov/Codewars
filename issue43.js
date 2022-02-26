function getGrade (s1, s2, s3) {
    let score = Math.round((s1 + s2 + s3) / 3);
      if (score >= 90 && score <= 100) return 'A';
      if (score >= 80 && score < 90) return 'B';
      if (score >= 70 && score < 80) return 'C';
      if (score >= 60 && score < 70) return 'D';
      if (score >= 0 && score < 60) return 'F';
    }

    или
    function getGrade (s1, s2, s3) {
        var s = (s1 + s2 + s3) / 3
        return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
      }