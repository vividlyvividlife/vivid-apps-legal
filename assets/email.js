(function () {
  document.querySelectorAll('.email-reveal').forEach(function (button) {
    button.addEventListener('click', function () {
      var user = button.getAttribute('data-mail-user');
      var domain = button.getAttribute('data-mail-domain');
      if (!user || !domain) return;

      var address;
      try {
        address = atob(user) + '@' + atob(domain);
      } catch (error) {
        return;
      }

      var link = document.createElement('a');
      link.href = 'mailto:' + address;
      link.textContent = address;
      button.replaceWith(link);
      link.focus();
    });
  });
})();
